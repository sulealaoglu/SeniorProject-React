import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    maritalStatus: "",
    educationField: "",
    educationLevel: "",
    longestResidence: "",
    monthlyIncome: "",
    chronicCondition: "",
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
    // Form verilerini göndermek için API isteği yapılabilir veya başka bir işlem gerçekleştirilebilir.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="age">Yaşınız:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
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
      <div>
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
      <div>
        <label htmlFor="educationField">
          Eğitim gördüğünüz bölümü yazınız:
        </label>
        <input
          type="text"
          id="educationField"
          name="educationField"
          value={formData.educationField}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="educationLevel">
          Eğitim gördüğünüz sınıf düzeyini:
        </label>
        <select
          id="educationField"
          name="educationField"
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
      <div>
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
      <div>
        <label htmlFor="monthlyIncome">AYLIK (bireysel) gelir düzeyiniz:</label>
        <input
          type="text"
          id="monthlyIncome"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="chronicCondition">
          Fiziksel bir rahatsızlığınız (kronik hastalığınız) var mı?
        </label>
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
            id="medicationForChronicCondition"
            name="medicationForChronicCondition"
            value={formData.medicationForChronicCondition}
            onChange={handleChange}
            placeholder="Nedir?"
          />
        )}
      </div>
      <div>
        <label htmlFor="medicationForChronicCondition">
          Fiziksel rahatsızlığınız (kronik hastalık gibi) sebebi ile düzenli
          ilaç kullanıyor musunuz?
        </label>
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
      <div>
        <label htmlFor="psychologicalCondition">
          Doktor tarafından tanı konulan psikolojik/psikiyatrik bir
          rahatsızlığınız var mı?
        </label>
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
      <div>
        <label htmlFor="medicationForPsychologicalCondition">
          Bu tanı sebebiyle ilaç kullanıyor musunuz?
        </label>
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
      <div>
        <label htmlFor="receivingPsychologicalTreatment">
          Şu anda herhangi bir yöntem ile psikolojik tedavi alıyor musunuz?
        </label>
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
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default RegistrationForm;
