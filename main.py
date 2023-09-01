
import sys
import argparse
import time
import os
import csv
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
#
driver = webdriver.Chrome(ChromeDriverManager().install())
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
    time.sleep(3)

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
# select.select_by_visible_text('25')
time.sleep(5)

court = driver.find_element(By.XPATH, '/html/body/div[2]/nav/div/div/ul/li[1]')
court.click()
time.sleep(2)

select_court = Select(driver.find_element(By.XPATH, '/html/body/div[2]/nav/div/div/ul/li[1]/div/div[1]/select'))
select_court.select_by_visible_text('High Court of Meghalaya')
time.sleep(2)
# taking state as user input from command line
# parser = argparse.ArgumentParser(description='Enter date')

# parser.add_argument('arg1', help='Enter from date')
# parser.add_argument('arg2', help='Enter to date')

# args = parser.parse_args()

# arg1 = args.arg1
# arg2 = args.arg2

# search_state = driver.find_element('id', 'search_text')
# search_state.send_keys('Court : High Court of Sikkim')

# more_states = driver.find_element(By.XPATH, '/html/body/div[2]/div[1]/div/div[2]/div[1]/div[2]/div[1]/button')
# more_states.click()

# state = driver.find_element(By.CSS_SELECTOR, '#MoreModal2 > div > div > div.modal-body > ul > li:nth-child(25) > a') #sikkim
# state.click()

search = driver.find_element(By.XPATH, '/html/body/div[2]/nav/div/div/div/div/button[1]')
search.click()
time.sleep(3)
# user_from_date = input("enter from date: ")
# user_to_date = input("enter to date: ")

# date = driver.find_element(By.XPATH, '/html/body/div[2]/nav/div/div/ul/li[3]/a')
# date.click()

# custom_date = driver.find_element(By.XPATH, '/html/body/div[2]/nav/div/div/ul/li[4]/div/div/div[5]/label')
# custom_date.click()
# date.click()

# from_date = driver.find_element('id', 'from_date')
# from_date.send_keys('01-10-2002')

# from_date = driver.find_element('id', 'from_date')
# from_date.send_keys('01-10-2020')

# -----------------------------------------------------------------------------------------------------------------------
details =[]
done = []
# starts pdf download
while True :

    for i in range(9):
        if ' Session timeout..!!!' in driver.page_source:
            for attempt in range(max_retries):
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

                search = driver.find_element(By.XPATH, '/html/body/div[9]/div/div/div[2]/div/div[2]/button')
                search.click()
                time.sleep(3)

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
                case_details_text = result_element.find_element(By.CLASS_NAME, 'caseDetailsTD').text
                # print(case_details_text)
                # if case_details_text != '':
                case_details_list = case_details_text.split(" | ")
                result_details_dict = {}
                for case_detail in case_details_list:
                    key, val = case_detail.split(' : ', maxsplit=1)
                    result_details_dict[key] = val
                details.append(result_details_dict)
                # print(result_details_dict)

            # 2,"{'CNR': 'HBHC010262202017', 'Date of registration': '16-03-2017', 'Date of decision': '29-06-2047', 'Disposal Nature': 'DISMISSED NO COSTS\nCourt : High Court for State of Telangana'}"
            df = pd.DataFrame(details)
            df.to_csv("high_court_data.csv", index=False)

            df = pd.read_csv("high_court_data.csv")
            df_merged = df.groupby(df.columns.tolist()).size().reset_index().rename(columns={0: 'Count'})
            df_merged.to_csv("merged_high_court_data.csv", index=False)

            element.click()
            time.sleep(0.5)
            # k = 0
            # opens the pdf in new window, downloads and closes it
            parent_window = driver.current_window_handle
            windows = driver.window_handles
            for window in windows:
                if window != parent_window:
                    driver.switch_to.window(window)
                    # print(driver.title)
                    pdf = driver.current_url
                    response = requests.get(pdf)

                    # print("{} Current URL".format(driver.current_url))
                    time.sleep(0.5)
                    for j in pdf:
                        filename = f"downloaded.{window}.pdf"
                        # k += 1

                        # Save the PDF file
                        with open(filename, "wb") as file:
                            file.write(response.content)
                    df_merged['Downloaded'] = df_merged['Count'] > 0
                    df_merged.to_csv("merged_high_court_data.csv", index=False)



                    # driver.execute_script("return window.print()")
                    # download pdf

                    time.sleep(0.5)
                    # break

                    driver.close()
            driver.switch_to.window(parent_window)
            # time.sleep(10)

        else:
            print("all pdfs for this state downloaded !")
            break

    # clicks on next button and goes to next page and repeats the process
    # time.sleep(10)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
    parent = driver.find_element('id', 'example_pdf_next')
    class_name = parent.get_attribute("class")
    if "disabled" in class_name:
        print("No more pages")
        break
    else:
        parent.click()

        # print('ok')
        time.sleep(1)
        driver.execute_script("window.scrollTo(0, 0);")
        time.sleep(3)









