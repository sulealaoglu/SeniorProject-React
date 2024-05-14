import React, { useState } from "react";
import "./style.css";
import videoBg from "../Components/Assests/login.mp4";

export default function Register() {
  const [formData, setFormData] = useState({
    user_Name: "",
    user_Surname:"",
    email: "",
    cell_Phone: "",
    password: "",
    age: "",
    gender: "",
    marital_Status: "",
    education_Field: "",
    education_Level: "",
    longest_Residence: "",
    monthly_Income: "",
    chronic_Condition: "",
    Chronic_Condition_Name: "",
    Chronic_Condition_Med: "",
    psychological_Condition: "",
    psychological_Condition_Med: "",
    receiving_Psycho_Treatment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
  };

  const isFormComplete = () => {
    // Check if all fields are filled
    for (const key in formData) {
      // For conditional inputs, check only if the corresponding condition is true
      if (
        key === "Chronic_Condition_Name" &&
        formData.chronic_Condition !== "Evet"
      )
        continue;
      if (
        key === "psychological_Condition_Med" &&
        formData.psychological_Condition !== "Evet"
      )
        continue;

      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-column">
            <div className="form-group">
                <label htmlFor="user_Name">Adınız:</label>
                <input
                  type="text"
                  id="user_Name"
                  name="user_Name"
                  value={formData.user_Name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_Surname">Soyadınız:</label>
                <input
                  type="text"
                  id="user_Surname"
                  name="user_Surname"
                  value={formData.user_Surname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Mail Adresi:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cell_Phone">Telefon Numarası:</label>
                <input
                  type="number"
                  id="cell_Phone"
                  name="cell_Phone"
                  value={formData.cell_Phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Şifre:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="age">Yaşınız:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  step="1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Cinsiyetiniz:</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Kadın">Kadın</option>
                  <option value="Erkek">Erkek</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="marital_Status">Medeni Haliniz:</label>
                <select
                  id="marital_Status"
                  name="marital_Status"
                  value={formData.marital_Status}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Bekar">Bekar</option>
                  <option value="Evli">Evli</option>
                  <option value="Boşanmış">Boşanmış</option>
                  <option value="Eşi vefat etmiş">Eşi vefat etmiş</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="education_Field">
                  Eğitim gördüğünüz bölümü:
                </label>
                <select
                  id="education_Field"
                  name="education_Field"
                  value={formData.education_Field}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Arkeoloji">Arkeoloji</option>
                  <option value="Biyoloji">Biyoloji</option>
                  <option value="Diş Hekimliği">Diş Hekimliği</option>
                  <option value="Ekonometri">Ekonometri</option>
                  <option value="Fizik">Fizik</option>
                  <option value="Fizyoterapi ve Rehabilitasyon">
                    Fizyoterapi ve Rehabilitasyon
                  </option>
                  <option value="Hemşirelik">Hemşirelik</option>
                  <option value="Hukuk">Hukuk</option>
                  <option value="İşletme">İşletme</option>
                  <option value="Mühendislik">Mühendislik</option>
                  <option value="Öğretmenlik">Öğretmenlik</option>
                  <option value="Tıp">Tıp</option>
                  <option value="Yönetim Bilişim Sistemleri">
                    Yönetim Bilişim Sistemleri
                  </option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="education_Level">
                  Eğitim gördüğünüz sınıf düzeyini:
                </label>
                <select
                  id="education_Level"
                  name="education_Level"
                  value={formData.education_Level}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hazırlık">Hazırlık</option>
                  <option value="1. Sınıf">1. Sınıf</option>
                  <option value="2. Sınıf">2. Sınıf</option>
                  <option value="3. Sınıf">3. Sınıf</option>
                  <option value="4. Sınıf">4. Sınıf</option>
                  <option value="5. Sınıf">5. Sınıf</option>
                  <option value="6. Sınıf">6. Sınıf</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="longest_Residence">
                  En uzun süre yaşadığınız yer:
                </label>
                <select
                  id="longest_Residence"
                  name="longest_Residence"
                  value={formData.longest_Residence}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Köy">Köy</option>
                  <option value="İlçe">İlçe</option>
                  <option value="Şehir">Şehir</option>
                  <option value="Büyükşehir">Büyükşehir</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="monthly_Income">
                  AYLIK (bireysel) gelir düzeyiniz:
                </label>
                <select
                  id="monthly_Income"
                  name="monthly_Income"
                  value={formData.monthly_Income}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="0-15.000">0-15.000</option>
                  <option value="15.001-30.000">15.001-30.000</option>
                  <option value="30.001-45.000">30.001-45.000</option>
                  <option value="45.001-60.000">45.001-60.000</option>
                  <option value="60.000+">60.000+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="chronic_Condition">
                  Fiziksel bir rahatsızlığınız (kronik hastalığınız) var mı?
                </label>
                <select
                  id="chronic_Condition"
                  name="chronic_Condition"
                  value={formData.chronic_Condition}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
                {formData.chronic_Condition === "Evet" && (
                  <input
                    type="text"
                    id="Chronic_Condition_Name"
                    name="Chronic_Condition_Name"
                    value={formData.Chronic_Condition_Name}
                    onChange={handleChange}
                    placeholder="Nedir?"
                  />
                )}
              </div>
              <div class="form-group">
                <label htmlFor="Chronic_Condition_Med">
                  Fiziksel rahatsızlığınız (kronik hastalık gibi) sebebi ile
                  düzenli ilaç kullanıyor musunuz?
                </label>
                <select
                  id="Chronic_Condition_Med"
                  name="Chronic_Condition_Med"
                  value={formData.Chronic_Condition_Med}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
              </div>
              <div class="form-group">
                <label htmlFor="psychological_Condition">
                  Doktor tarafından tanı konulan psikolojik/psikiyatrik bir
                  rahatsızlığınız var mı?
                </label>
                <select
                  id="psychological_Condition"
                  name="psychological_Condition"
                  value={formData.psychological_Condition}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
                {formData.psychological_Condition === "Evet" && (
                  <input
                    type="text"
                    id="psychological_Condition_Med"
                    name="psychological_Condition_Med"
                    value={formData.psychological_Condition_Med}
                    onChange={handleChange}
                    placeholder="Tanıyı yazınız"
                  />
                )}
              </div>
              <div class="form-group">
                <label htmlFor="psychological_Condition_Med">
                  Bu tanı sebebiyle ilaç kullanıyor musunuz?
                </label>
                <select
                  id="psychological_Condition_Med"
                  name="psychological_Condition_Med"
                  value={formData.psychological_Condition_Med}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </div>
              <div class="form-group">
                <label htmlFor="receiving_Psycho_Treatment">
                  Şu anda herhangi bir yöntem ile psikolojik tedavi alıyor
                  musunuz?
                </label>
                <select
                  id="receiving_Psycho_Treatment"
                  name="receiving_Psycho_Treatment"
                  value={formData.receiving_Psycho_Treatment}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
              </div>
              {isFormComplete() && (
                <div className="form-group">
                  <button className="submit-button" type="submit">
                    Kaydet
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
