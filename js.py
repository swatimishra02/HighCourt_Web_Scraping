import time
import requests
import time
from bs4 import BeautifulSoup
import pandas as pd
import requests
import csv
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
import easyocr

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://judgments.ecourts.gov.in/pdfsearch/")
url = "https://judgments.ecourts.gov.in/pdfsearch/"  # base url
r = requests.get(url)

select = Select(driver.find_element('id','fcourt_type'))
select.select_by_visible_text('High Court')
time.sleep(3)

max_retries = 5

for attempt in range(max_retries):
    element = driver.find_element('id',"captcha_image")
    screenshot = element.screenshot_as_png

    with open("hc_screenshot.png", "wb") as file:
        file.write(screenshot)

    languages = ['en']
    reader = easyocr.Reader(languages)
    image_path = "hc_screenshot.png"
    result = reader.readtext(image_path)

    text = ""
    for detection in result:
        text += detection[1] + " "

    captcha_field = driver.find_element('id','captcha')
    captcha_field.clear()
    captcha_field.send_keys(text)

    search = driver.find_element('id','main_search')
    search.click()
    time.sleep(5)

    if "Invalid Captcha..!!!" in driver.page_source or "Captcha should be numeric..!" in driver.page_source:
        cross = driver.find_element(By.CLASS_NAME, 'btn-close')
        cross.click()
        print(f"Attempt {attempt + 1} - Invalid captcha. Retrying...")
        continue
    else:
        print("Captcha entered successfully.")
        break
time.sleep(5)

def scrape_case_details():
    # Make a GET request to the webpage
    # response = requests.get(url)

    # Create a BeautifulSoup object to parse the HTML content
    soup = BeautifulSoup(r.text, "html.parser")

    # Find the HTML elements containing case details
    case_elements = soup.find_all("div", class_="case-details")

    # List to store scraped case details
    case_details_list = []

    # Iterate over the case elements and extract details
    for case_element in case_elements:
        # Extract case details from the element
        cnr = case_element.find("span", class_="cnr").text.strip()
        registration_date = case_element.find("span", class_="registration-date").text.strip()
        decision_date = case_element.find("span", class_="decision-date").text.strip()
        disposal_nature = case_element.find("span", class_="disposal-nature").text.strip()
        court = case_element.find("span", class_="court").text.strip()

        # Create a dictionary with the extracted details
        case_details = {
            "CNR": cnr,
            "Date of registration": registration_date,
            "Date of decision": decision_date,
            "Disposal Nature": disposal_nature,
            "Court": court
        }

        # Append the case details to the list
        case_details_list.append(case_details)

    return case_details_list

# Scrape the case details from the webpage
scraped_case_details = scrape_case_details()

# CSV file path
csv_file_path = "scraped_case_details.csv"

# Check if there are any scraped case details
if scraped_case_details:
    # CSV headers
    headers = scraped_case_details[0].keys()

    # Write case details to CSV file
    with open(csv_file_path, "w", newline="") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=headers)

        # Write headers
        writer.writeheader()

        # Write case details
        writer.writerows(scraped_case_details)

    print("Scraped case details saved successfully to CSV file.")
else:
    print("No scraped case details found.")
