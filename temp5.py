from selenium import webdriver
import requests

# Path to the chromedriver executable
chromedriver_path = '/path/to/chromedriver'

# Create a new Chrome browser instance
driver = webdriver.Chrome(chromedriver_path)

url = 'https://judgments.ecourts.gov.in//judgments_lib/tmp/e8d79d56faa7af72e680e05bc16f032dc58af6706b9e4684494dc98e8aa88dde1686639501.pdf'

# Open the URL in the browser
driver.get(url)
r = requests.get(url)

# Get the current URL after any possible redirects
current_url = driver.current_url

# Send a HEAD request to the current URL to get the final download URL
response = requests.head(current_url, allow_redirects=True)
download_url = response.url

# Download the PDF file
response = requests.get(download_url)
file_path = r"C:\Users\KIIT\Desktop\state" # Replace with the path where you want to save the file
with open(file_path, 'wb') as file:
    file.write(response.content)

# Close the browser window
# driver.quit()