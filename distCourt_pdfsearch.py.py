from bs4 import BeautifulSoup
import time
import easyocr
import requests
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import Select
import pandas as pd

# https://services.ecourts.gov.in/ecourtindia_v4_bilingual/cases/s_orderdate.php?state=D&state_cd=15&dist_cd=16

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://services.ecourts.gov.in/ecourtindia_v4_bilingual/cases/s_orderdate.php?state=D&state_cd=13&dist_cd=16")
url = "https://services.ecourts.gov.in/ecourtindia_v4_bilingual/cases/s_orderdate.php?state=D&state_cd=13&dist_cd=16"  # base url



button = driver.find_element("id", "radCourtComplex")
button.click()
time.sleep(1)


#datefield2 = driver.find_element('id', 'to_date')
#datefield2.click()
#datefield2.send_keys("02-02-2019")
#time.sleep(1)

#datefield1 = driver.find_element('id', 'from_date')
#datefield1.click()
#datefield1.send_keys("02-02-2011")

select = Select(driver.find_element('id','court_complex_code'))
select.select_by_visible_text('Sitapur District Court Complex')
time.sleep(3)

element = driver.find_element('id', "captcha_image")

# Capture screenshot of the element
screenshot = element.screenshot_as_png

# Save the screenshot to a file
with open("element_screenshot.png", "wb") as file:
    file.write(screenshot)

languages = ['en']

reader = easyocr.Reader(languages)

image_path = "element_screenshot.png"

result = reader.readtext(image_path)

text = ""
for detection in result:
    text += detection[1] + " "  # Concatenate the detected text

# print(text)

captcha_field = driver.find_element('id', 'captcha')
captcha_field.send_keys(text)
time.sleep(1)

datefield2 = driver.find_element('id', 'to_date')
datefield2.click()
datefield2.send_keys("02-02-2019")
time.sleep(1)

datefield1 = driver.find_element('id', 'from_date')
datefield1.click()
datefield1.send_keys("02-02-2011")

submit = driver.find_element('name', 'submit1')
submit.click()
time.sleep(40)

r = requests.get(url)
# print(r.content)
soup = BeautifulSoup(r.text, 'lxml')
# print(soup.a)
links = []
for link in soup.findAll('a'):
    links.append(link.get('href'))

print(links)

# url2 = 'https://services.ecourts.gov.in/ecourtindia_v4_bilingual/cases/display_pdf.php?filename=/orders/2021/253300006452021_1.pdf&caseno=Cr.%20Reg.%20Case/645/2021&cCode=14&appFlag=web&normal_v=1'