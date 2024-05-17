import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const UserAgreement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <label>
        <input type="checkbox" />
        {' '}
        <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={openModal}>
         Kullanıcı Sözleşmesini 
        </span> okudum, kabul ediyorum.
      </label>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Kullanıcı Sözleşmesi"
        style={{
          
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000 // Ensure the overlay is above all other elements
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '80vh',
            overflowY: 'auto',
            zIndex: 1001 // Ensure the content is above the overlay
          },
        }}
      >
        <h2>Kullanıcı Sözleşmesi</h2>
        <div>
          <p>
Bu kullanıcı sözleşmesi ("Sözleşme"), [Şirket Adı] ("Şirket") ile bu web sitesini kullanacak olan kişi veya kişiler arasında düzenlenmiştir.
</p> <p>
1. Kabul Edilmiş Kullanım Şartları
</p> 
<p>
Bu web sitesini kullanarak, aşağıdaki şartları kabul etmiş sayılırsınız:

a. Web sitesini sadece yasal ve meşru amaçlar için kullanacaksınız.

b. Diğer kullanıcıların gizliliğini ihlal etmeyeceksiniz ve onların kişisel bilgilerini toplamayacaksınız.

c. Web sitesini, içeriği veya diğer kullanıcıları kötüye kullanmayacaksınız veya taciz etmeyeceksiniz.

d. Web sitesinde yer alan içeriği kopyalamayacak, dağıtmayacak veya değiştirmeyeceksiniz.
</p>
<p>
2. İçerik Hakları
</p>
<p>
Bu web sitesindeki tüm içeriklerin telif hakları Şirket'e aittir veya lisanslıdır. İzin almadan içerikleri kopyalamak, dağıtmak veya değiştirmek yasaktır.
</p>
<p>
3. Gizlilik Politikası
</p>
<p>
Bu web sitesini kullanırken toplanan kişisel bilgilerinizle ilgili olarak Şirket'in gizlilik politikasını kabul etmiş sayılırsınız. Gizlilik politikamızı incelemek için [Gizlilik Politikası linki].
</p>
<p>
4. Sorumluluk Reddi
</p>
<p>
Bu web sitesinde sağlanan içeriklerin doğruluğu, eksiksizliği veya güncelliği konusunda herhangi bir garanti verilmez. Şirket, bu web sitesini kullanmanızdan kaynaklanan herhangi bir kayıp veya zarardan sorumlu tutulamaz.
</p>
<p>
5. Değişiklikler
</p>
<p>
Şirket, bu kullanıcı sözleşmesini dilediği zaman değiştirme hakkını saklı tutar. Değişiklikler web sitesinde yayınlandığı anda yürürlüğe girer. Web sitesini kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.
</p>          
        </div>
        <button className="agreement-button" onClick={closeModal}>Kapat</button>
      </Modal>
    </div>
  );
};

export default UserAgreement;
