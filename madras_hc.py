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
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.mhc.tn.gov.in/judis/index.php/casestatus/text_search")
url = "https://www.mhc.tn.gov.in/judis/index.php/casestatus/text_search"  # base url

text = driver.find_element('id', 'find_text')
word = 'then'
text.send_keys(word)
text.click()

datefield1 = driver.find_element('id', 'start-date')
datefield1.click()
datefield1.send_keys("2016-01-04")
time.sleep(1)

datefield2 = driver.find_element('id', 'end-date')
datefield2.click()
datefield2.send_keys("2016-03-04")


select = Select(driver.find_element('id','reportable'))
select.select_by_visible_text('All')

submit = driver.find_element('id', 'text_find')
submit.click()
time.sleep(5)

num = 312889
list = []

for i in range(300000, num):
    pdf = "https://www.mhc.tn.gov.in/judis/index.php/casestatus/viewpdf/"+str(i)
    list.append(pdf)
print(list)




