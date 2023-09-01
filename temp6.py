import sys
import argparse
import time
import pandas as pd
import requests
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
url = "https://judgments.ecourts.gov.in/pdfsearch/"
r = requests.get(url)

select = Select(driver.find_element('id','fcourt_type'))
select.select_by_visible_text('High Court')
time.sleep(3)

# -----------------------------------------------------------------------------------------------------------
# captcha
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
        refresh = driver.find_element('xpath', '//*[@id="captcha_div"]/div[1]/a')
        refresh.click()
        element = driver.find_element('id', "captcha_image")
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

        captcha_field = driver.find_element('id', 'captcha')
        captcha_field.clear()
        captcha_field.send_keys(text)
        print(f"Attempt {attempt + 1} - Invalid captcha. Retrying...")
        continue
    else:
        print("Captcha entered successfully.")
        break
# --------------------------------------------------------------------------------------------------------------------
# select = Select(driver.find_element('name','example_pdf_length'))
# select.select_by_visible_text('1,000')
time.sleep(2)

# taking state as user input from command line


search_state = driver.find_element('id', 'search_text')
search_state.send_keys('Bombay')

search = driver.find_element(By.XPATH, '/html/body/div[2]/nav/div/div/div/div/button[1]')
search.click()
time.sleep(3)
# user_from_date = input("enter from date: ")
# user_to_date = input("enter to date: ")

# date = driver.find_element('id', 'other_filter')
# date.click()

# custom_date = driver.find_element('id', 'exampleRadios5')
# custom_date.click()
# date.click()

# from_date = driver.find_element('id', 'from_date')
# from_date.send_keys(user_from_date)

# from_date = driver.find_element('id', 'from_date')
# from_date.send_keys(user_to_date)

# -----------------------------------------------------------------------------------------------------------------------
details =[]
done = []

# starts pdf download
while True :

    for i in range(15):
        element_id = 'link_' + str(i)
        if element_id in driver.page_source:
            element = driver.find_element(By.ID, element_id)
            scroll_script = "arguments[0].scrollIntoView();"
            driver.execute_script(scroll_script, element)
            actions = ActionChains(driver)
            actions.move_to_element(element).perform()
            time.sleep(1)
            # extracting data from webpage and saving in csv
            WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, "report_body")))
            result_elements = driver.find_element('id', 'report_body').find_elements('tag name', 'tr')
            result_details = []
            done = []

            for result_element in result_elements:
                result_details_dict = {}
                case_details_text = result_element.find_element(By.CLASS_NAME, 'caseDetailsTD').text
                # print(case_details_text)
                if case_details_text != '':
                    case_details_list = case_details_text.split(" | ")
                    for case_detail in case_details_list:
                        key, val = case_detail.split(' : ', maxsplit=1)
                        result_details_dict[key] = val
                        details.append(result_details_dict)
                        # print(result_details_dict)

                        # 2,"{'CNR': 'HBHC010262202017', 'Date of registration': '16-03-2017', 'Date of decision': '29-06-2047', 'Disposal Nature': 'DISMISSED NO COSTS\nCourt : High Court for State of Telangana'}"
                df = pd.DataFrame({"S.no": details})

                df.to_csv("high_court_data.csv")

            element.click()
            time.sleep(0.5)
            # k = 0
            # opens the pdf in new window, downloads and closes it
            # done = []
            parent_window = driver.current_window_handle
            windows = driver.window_handles
            for window in windows:
                if window != parent_window:
                    driver.switch_to.window(window)
                    # print(driver.title)
                    pdf = driver.current_url
                    response = requests.get(pdf)

                    print("{} Current URL".format(driver.current_url))
                    time.sleep(0.5)
                    for j in pdf:
                        filename = f"downloaded.{window}.pdf"
                        done.append('True')
                        df = pd.DataFrame({"downloaded": done})

                        df.to_csv("downloaded.csv")
                        # k += 1

                        # Save the PDF file
                        with open(filename, "wb") as file:
                            file.write(response.content)

                    # driver.execute_script("return window.print()")
                    # download pdf

                    time.sleep(0.5)
                    # break

                    driver.close()
            driver.switch_to.window(parent_window)

        # if : element_id in driver.page_source:
        # .... (code to download pdf)
        else:
            print("all pdfs for this state downloaded !")
            break
    break

