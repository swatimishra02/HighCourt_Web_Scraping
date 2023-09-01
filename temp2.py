# https://www.mhc.tn.gov.in/judis/index.php/casestatus/viewpdf/298156
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
driver.get("https://www.mhc.tn.gov.in/judis/index.php/casestatus/viewpdf/298156")
url = "https://www.mhc.tn.gov.in/judis/index.php/casestatus/viewpdf/298156"  # base url
r = requests.get(url)
file = open("FILENAME.pdf", 'wb')
file.write(r.read())
file.close()