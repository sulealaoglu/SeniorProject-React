import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RadioTable from "../Components/RadioTable";
export default function Tsgo() {
  const questions = [
    "1.Hayatıma verdiğim değer arttı",
    "2.Hayatımın kıymetini anladım",
    "3.Yeni ilgi alanları geliştirdim.",
    "4.Kendime güvenim arttı.",
    "5.Manevi konuları daha iyi anladım",
    "6.Zor zamanlarda başkalarına güvenebileceğimi anladım.",
    "7.Hayatıma yeni bir yön verdim",
    "8.Kendimi diğer insanlara daha yakın hissetmeye başladım.",
    "9.Duygularımı ifade etme isteğim arttı.",
    "10.Zorluklarla başa çıkabileceğimi anladım.",
    "11.Hayatımı daha iyi şeyler yaparak geçirebileceğimi anladım.",
    "12.Olayları olduğu gibi kabullenmeyi öğrendim.",
    "13.Yaşadığım her günün değerini anladım.",
    "14.Yaşadığım stresten sonra benim için yeni fırsatlar doğdu.",
    "15.Başkalarına karşı şefkat hislerim arttı.",
    "16.İnsan ilişkilerimde Daha fazla gayret göstermeye başladım.",
    "17. Değişmesi gereken şeyleri geliştirmek için daha fazla gayret göstermeye başladım.",
    "18.Dini inancım daha da güçlendi.",
    "19.Düşündüğümden daha güçlü olduğumu anladım",
    "20.İnsanların ne kadar iyi olduğu konusunda çok şey öğrendim.",
    "21.Başkalarına ihtiyacım olabileceğini öğrendim.",
  ];
  const [totalScore, setTotalScore] = useState(0);
  let dynamicName = "TSGO";

  const headers = ["Soru", "0", "1", "2", "3", "4", "5"];
  const [answers, setAnswers] = useState(Array(21).fill(-1));
  const itemsPerPage = 7;
  let totalscore = 0;

  // const handleSubmit = () => {
  //   for (let index = 0; index < answers.length; index++) {
  //     totalscore = totalscore + answers[index];
  //   }
  //   const answersJson = JSON.stringify(answers);
  //   console.log(answersJson);
  //   console.log(totalscore);
  //   navigate("/ddvp");
  // };

  const calculate = () => {
    for (let index = 0; index < answers.length; index++) {
      totalscore = totalscore + answers[index];
    }
    setTotalScore(totalscore);
  };

  return (
    <div>
      <div className="description-box">
        <p>
          Aşağıda yaşadığınız stresten dolayı yaşamınızda olabilecek bazı
          değişiklikler verilmektedir. Her cümleyi dikkatle okuyunuz ve
          belirtilen değişikliğin sizin için ne derece gerçekleştiğini aşağıdaki
          ölçeği kullanarak belirtiniz.
        </p>
        <p>0= Yaşadığım stresten dolayı böyle bir değişiklik yaşamadım.</p>
        <p>1 = Yaşadığım stresten dolayı çok az bir değişiklik yaşadım.</p>
        <p>2= Yaşadığım stresten dolayı az derecede değişiklik yaşadım.</p>
        <p>3= Yaşadığım stresten dolayı orta derecede değişiklik yaşadım.</p>
        <p>
          4= Yaşadığım stresten dolayı oldukça fazla derecede değişiklik
          yaşadım.
        </p>
        <p>5= Yaşadığım stresten dolayı aşırı derecede değişiklik yaşadım.</p>
      </div>
      <div className="wrapper-scale">
        <RadioTable
          headers={headers} // Tablo başlıkları
          questions={questions} // Sorular
          answers={answers} // Cevaplar
          setAnswers={setAnswers} // Cevapları güncelleme işlevi
          itemPerPage={itemsPerPage} // Her sayfada gösterilecek soru sayısı
          calculateScore={calculate}
          navigatePage="/ddvp"
          totalScore={totalScore}
          testName={dynamicName}
        />
      </div>
    </div>
  );
}
