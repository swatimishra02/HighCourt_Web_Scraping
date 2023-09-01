import PyPDF2

def pdf_to_text(pdf_file):
    text = ""
    with open(pdf_file, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        num_pages = len(reader.pages)
        for page_num in range(num_pages):
            page = reader.pages[page_num]
            text += page.extract_text()
    return text

# Example usage
pdf_file = r"C:\Users\KIIT\Desktop\hindi_sc_pdf.pdf"
converted_text = pdf_to_text(pdf_file)
print(converted_text)
