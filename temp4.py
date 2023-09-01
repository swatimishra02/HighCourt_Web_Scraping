import selenium.webdriver
from bs4 import BeautifulSoup
import time
import easyocr
import requests
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
import threading
from selenium.webdriver.common.action_chains import ActionChains


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://judgments.ecourts.gov.in/pdfsearch/")
url = "https://judgments.ecourts.gov.in/pdfsearch/"  # base url


# ------------------------------------------------------------------------------------------------------------------------------
# for bypassing captcha:

select = Select(driver.find_element('id','fcourt_type'))
select.select_by_visible_text('High Court')
time.sleep(3)

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
    text += detection[1] + " "  # Concatenate the detected text

# print(text)

captcha_field = driver.find_element('id', 'captcha')
captcha_field.send_keys(text)

search = driver.find_element('id', 'main_search')
search.click()

def thread1() :
    r = requests.get(url)
    # driver.set_window_size(3095, 2160)    ----> tried to change window size
    # print(driver.get_window_size())
    # driver.maximize_window()
    # print(r.content)
    # window_before = driver.window_handles[0]   -----------> tried handling multiple windows at once
    soup = BeautifulSoup(r.text, 'lxml')
    # driver.execute_script("window.scrollBy.(0,1000)","")
    # accessing pdfs and case details :
    actions = ActionChains(driver)

    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, "report_body")))
    result_elements = driver.find_element('id', 'report_body').find_elements('tag name', 'tr')
    actions.move_to_element(result_elements).perform()
    result_details = []
    for result_element in result_elements:
        result_details_dict = {}
        case_details_text = result_element.find_element(By.CLASS_NAME, 'caseDetailsTD').text
        if case_details_text != '':
            case_details_list = case_details_text.split(" | ")
            for case_detail in case_details_list:
                key, val = case_detail.split(' : ', maxsplit=1)
                result_details_dict[key] = val

            case_name = result_element.find_element(By.CSS_SELECTOR, "button[id^=link]")
            result_details_dict['case_name'] = case_name.text

            case_name.click()
            time.sleep(2)

            # ActionChains(driver).move_to_element(button).click(button).perform()
            # window_after = driver.window_handles[1]
            # driver.switch_to.window(window_after)
            # download = driver.find_element('id', 'download')
            # download.click()
            # driver.switch_to.window(window_before)
            # driver.execute_script("arguments[0].scrollIntoView();", result_elements)

            # WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.ID, "viewFiles-body")))
            judgment_url = driver.find_element('id',
                                               'viewFiles-body')  # .find_element('tag name', "object").get_attribute(
            # 'data')
            result_details_dict['judgment_url'] = judgment_url
            result_details.append(result_details_dict)
            # driver.find_element("id", 'modal_close').click()
            print(case_details_list)
            print(judgment_url)
            # pdf_link = 'https://judgments.ecourts.gov.in//judgments_lib/tmp/'+session+element+'.pdf'

def thread2() :
    x = 0
    while True:
        x += 1
        driver.execute_script('scrollBy(0,50)')
        time.sleep(1)
        if x > 50:
            break

if __name__=='__main__':
    while True:
        for _ in range(3):
            t1 = threading.Thread(target=thread1)
            t1.start()
            t1.join()

        t2 = threading.Thread(target=thread2)
        t2.start()
        t2.join()





