# 1. Kutubxonalarni o'rnatish qismi (Sizning kodingizdagi !pip liniyasi)
import os
import streamlit as st

# Orqa fonda kutubxonani avtomatik tekshirish
try:
    import qrcode
    from IPython.display import Image
except ImportError:
    os.system("pip install qrcode pillow -q")
    import qrcode
    from IPython.display import Image

# Sayt sarlavhasi
st.title("Python QR Code Generator")

# 2. Foydalanuvchidan ma'lumot olish (Sizning kodingiz: matn = input("Link: "))
matn = st.text_input("Link: ")

# Agar foydalanuvchi ma'lumot kiritsa, sizning kodingiz ketma-ket ijro etiladi
if matn:
    # 3. QR kod yaratish va saqlash (Sizning kodingiz: qrcode.make(matn).save("qr.png"))
    qrcode.make(matn).save("qr.png")
    
    # 4. Rasmni ekranda ko'rsatish (Sizning kodingiz: Image("qr.png"))
    st.image("qr.png", caption="Generated qr.png")
    
    # Sayt foydalanuvchisi uchun yuklab olish tugmasi
    with open("qr.png", "rb") as file:
        st.download_button(
            label="Download qr.png",
            data=file,
            file_name="qr.png",
            mime="image/png"
        )
