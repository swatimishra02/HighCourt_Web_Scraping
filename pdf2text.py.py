# The import name for this library is fitz
import fitz
import easyocr
import pandas as pd

# Create a document object
doc = fitz.open(r'C:\Users\KIIT\Desktop\hindi_sc_pdf.pdf')  # or fitz.Document(filename)

# Extract the number of pages (int)
#count = [0,doc.page_count]
print(doc.page_count)

My_list = [*range(0, doc.page_count)]
#print(My_list)
# the metadata (dict) e.g., the author,...
# print(doc.metadata)
for i in My_list:
  page = doc.load_page(i)
  text = page.get_text()
  # print(text)

# Render and save the page as an image
pix = page.get_pixmap()
pix.save(f"page-{page.number}.png")

# get all links on a page
#links = page.get_links()
#print(links)

# Render and save all the pages as images
for i in range(doc.page_count):
  page = doc.load_page(i)
  pix = page.get_pixmap()
  pix.save("page-%i.png" % page.number)

# get the links on all pages
#for i in range(doc.page_count):
 # page = doc.load_page(i)
  #link = page.get_links()
  #print(link)

pdf = []
reader = easyocr.Reader(['en', 'hi'])
for i in range(0, page.number):
  results = reader.readtext('page-'+str(i)+'.png')
  # print(results)

  text = ''
  for result in results:
    text += result[1]
    pdf.append(text)
  print(text)
  df = pd.DataFrame(pdf)
  df.to_csv("pdf.csv")

