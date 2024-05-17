import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const OnamAgreement = () => {
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
         Bilgilendirilmiş Onam Formunu 
        </span> okudum, kabul ediyorum.
      </label>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Bilgilendirilmiş Onam Formu"
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
        <h2>Bilgilendirilmiş Onam Formu</h2>
        <div>
             <p>
             Bu belgeyi, içerdiği bilgileri dikkatlice okuyup anladıktan sonra, prosedür/araştırma/aktivite hakkında edindiğim bilgilere dayanarak gönüllü olarak katılmayı kabul ediyorum. Bu kararımı verirken, potansiyel faydaları, riskleri ve alternatif seçenekleri değerlendirdim. Kendi sağlık durumum ve kişisel tercihlerim doğrultusunda, bu prosedür/araştırma/aktiviteye katılmaktan dolayı tam bir anlayışa ve rızaya sahibim. Bu onamımın baskı altında olmadığını, tamamen kendi irademle verildiğini belirtmek isterim.
              </p>      
        </div>
        <button className="agreement-button" onClick={closeModal}>Kapat</button>
      </Modal>
    </div>
  );
};

export default OnamAgreement;
