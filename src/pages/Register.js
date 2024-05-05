import React, { useState } from "react";
import "./style.css";
import videoBg from "../Components/Assests/login.mp4";

export default function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    cellphone: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    maritalStatus: "",
    educationField: "",
    educationLevel: "",
    longestResidence: "",
    monthlyIncome: "",
    chronicCondition: "",
    ChronicConditionName: "",
    medicationForChronicCondition: "",
    psychologicalCondition: "",
    medicationForPsychologicalCondition: "",
    receivingPsychologicalTreatment: "",
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
      if (key === "ChronicConditionName" && formData.chronicCondition !== "Evet") continue;
      if (key === "medicationForPsychologicalCondition" && formData.psychologicalCondition !== "Evet") continue;

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
                <label htmlFor="userName">Kullanıcı Adı:</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
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
                <label htmlFor="cellphone">Telefon Numarası:</label>
                <input
                  type="number"
                  id="cellphone"
                  name="cellphone"
                  value={formData.cellphone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Şifre:</label>
                <input
                  type="password"
                  id="password"
                  name="userPassword"
                  value={formData.userPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Adınız:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Soyadınız:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
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
                <label htmlFor="maritalStatus">Medeni Haliniz:</label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
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
                <label htmlFor="educationField">Eğitim gördüğünüz bölümü:</label>
                <select
                  id="educationField"
                  name="educationField"
                  value={formData.educationField}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Arkeoloji">Arkeoloji</option>
                  <option value="Biyoloji">Biyoloji</option>
                  <option value="Diş Hekimliği">Diş Hekimliği</option>
                  <option value="Ekonometri">Ekonometri</option>
                  <option value="Fizik">Fizik</option>
                  <option value="Fizyoterapi ve Rehabilitasyon">Fizyoterapi ve Rehabilitasyon</option>
                  <option value="Hemşirelik">Hemşirelik</option>
                  <option value="Hukuk">Hukuk</option>
                  <option value="İşletme">İşletme</option>
                  <option value="Mühendislik">Mühendislik</option>
                  <option value="Öğretmenlik">Öğretmenlik</option>
                  <option value="Tıp">Tıp</option>
                  <option value="Yönetim Bilişim Sistemleri">Yönetim Bilişim Sistemleri</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="educationLevel">Eğitim gördüğünüz sınıf düzeyini:</label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
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
                <label htmlFor="longestResidence">En uzun süre yaşadığınız yer:</label>
                <select
                  id="longestResidence"
                  name="longestResidence"
                  value={formData.longestResidence}
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
                <label htmlFor="monthlyIncome">AYLIK (bireysel) gelir düzeyiniz:</label>
                <select
                  id="monthlyIncome"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
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
                <label htmlFor="chronicCondition">Fiziksel bir rahatsızlığınız (kronik hastalığınız) var mı?</label>
                <select
                  id="chronicCondition"
                  name="chronicCondition"
                  value={formData.chronicCondition}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
                {formData.chronicCondition === "Evet" && (
                  <input
                    type="text"
                    id="ChronicConditionName"
                    name="ChronicConditionName"
                    value={formData.ChronicConditionName}
                    onChange={handleChange}
                    placeholder="Nedir?"
                  />
                )}
              </div>
              <div class="form-group">
                <label htmlFor="medicationForChronicCondition">Fiziksel rahatsızlığınız (kronik hastalık gibi) sebebi ile düzenli ilaç kullanıyor musunuz?</label>
                <select
                  id="medicationForChronicCondition"
                  name="medicationForChronicCondition"
                  value={formData.medicationForChronicCondition}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
              </div>
              <div class="form-group">
                <label htmlFor="psychologicalCondition">Doktor tarafından tanı konulan psikolojik/psikiyatrik bir rahatsızlığınız var mı?</label>
                <select
                  id="psychologicalCondition"
                  name="psychologicalCondition"
                  value={formData.psychologicalCondition}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
                {formData.psychologicalCondition === "Evet" && (
                  <input
                    type="text"
                    id="medicationForPsychologicalCondition"
                    name="medicationForPsychologicalCondition"
                    value={formData.medicationForPsychologicalCondition}
                    onChange={handleChange}
                    placeholder="Tanıyı yazınız"
                  />
                )}
              </div>
              <div class="form-group">
                <label htmlFor="medicationForPsychologicalCondition">Bu tanı sebebiyle ilaç kullanıyor musunuz?</label>
                <select
                  id="medicationForPsychologicalCondition"
                  name="medicationForPsychologicalCondition"
                  value={formData.medicationForPsychologicalCondition}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Evet">Evet</option>
                  <option value="Hayır">Hayır</option>
                </select>
              </div>
              <div class="form-group">
                <label htmlFor="receivingPsychologicalTreatment">Şu anda herhangi bir yöntem ile psikolojik tedavi alıyor musunuz?</label>
                <select
                  id="receivingPsychologicalTreatment"
                  name="receivingPsychologicalTreatment"
                  value={formData.receivingPsychologicalTreatment}
                  onChange={handleChange}
                >
                  <option value="">Seçiniz</option>
                  <option value="Hayır">Hayır</option>
                  <option value="Evet">Evet</option>
                </select>
              </div>
              {isFormComplete() && (
                <div className="form-group">
                  <button className="submit-button" type="submit">Kaydet</button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
