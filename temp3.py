import selenium.webdriver
from bs4 import BeautifulSoup
import time
import fitz
from seleniumwire import webdriver
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
import csv


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://judgments.ecourts.gov.in/pdfsearch/")
url = "https://judgments.ecourts.gov.in/pdfsearch/"  # base url
r = requests.get(url)

# ------------------------------------------------------------------------------------------------------------------------------
# for bypassing captcha:

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

# ----------------------------------------------------------------------------------------------------------------------------
# document.getElementById('link_0').click()
# select = Select(driver.find_element('name','example_pdf_length'))
# select.select_by_visible_text('25')
time.sleep(3)

for i in range(3):
    element_id = 'link_'+str(i)
    element = driver.find_element(By.ID, element_id)
    scroll_script = "arguments[0].scrollIntoView();"
    driver.execute_script(scroll_script, element)
    actions = ActionChains(driver)
    actions.move_to_element(element).perform()
    time.sleep(0.5)
    # data
    # WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, "report_body")))
    # result_elements = driver.find_element('id', 'report_body').find_elements('tag name', 'tr')
    # result_details = []
    # for result_element in result_elements:
      #  result_details_dict = {}
       # case_details_text = result_element.find_element(By.CLASS_NAME, 'caseDetailsTD').text
        #if case_details_text != '':
         #   case_details_list = case_details_text.split(" | ")
          #  for case_detail in case_details_list:
           #     key, val = case_detail.split(' : ', maxsplit=1)
            #    result_details_dict[key] = val
                # print(result_details_dict)
    element.click()
    time.sleep(0.5)

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
                filename = "downloaded"+str(i)+".pdf"

                # Save the PDF file
                with open(filename, "wb") as file:
                    file.write(response.content)

            # driver.execute_script("return window.print()")
            # download pdf

            time.sleep(0.5)
            # break

            driver.close()
    driver.switch_to.window(parent_window)
# -----------------------------------------------------------------------------------------------------------------------
# WebDriverWait(driver, 40).until(EC.element_to_be_clickable((By.ID, 'link_0'))).click()

# for next page
next_id = 'example_pdf_next'
next_button = driver.find_element(By.ID, next_id)
scroll_script = "arguments[0].scrollIntoView();"
driver.execute_script(scroll_script, next_button)
time.sleep(3)
actions = ActionChains(driver)
actions.move_to_element(next_button).perform()
time.sleep(0.5)
next_button.click()
time.sleep(5)

# https://judgments.ecourts.gov.in/pdfsearch/?p=pdf_search/home&text=&captcha=576931&search_opt=PHRASE&fcourt_type=3&escr_flag=&proximity=&app_token=3060227bc42b6c4573205392132e97828515ffae97d1c9a530c4fe3f93160e94
# https://judgments.ecourts.gov.in/pdfsearch/?p=pdf_search/home&text=&captcha=576931&search_opt=PHRASE&fcourt_type=3&escr_flag=&proximity=&app_token=3060227bc42b6c4573205392132e97828515ffae97d1c9a530c4fe3f93160e94

