import React, { useState, useEffect } from "react";
import Navbar from "../Components/NavBar";
import videoBg from "../Components/Assests/login.mp4";
import AdminTable from "../Components/AdminTable";
import axios from "axios";
const AdminPage = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [searchId, setSearchId] = useState("");
  const [data, setData] = useState([]);
  const [option, setOption] = useState("A");
  const [showTable, setShowTable] = useState(false);
  const [isButtonPressed, setisButtonPressed] = useState(false);

  useEffect(() => {
    // Fetch clients assigned to admin
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
    fetchClientData(event.target.value, option);
  };

  const handleSearchChange = (event) => {
    setSearchId(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchClientData(searchId, option);
  };

  const handleOptionChange = (option) => {
    setOption(option);
    setisButtonPressed(true);
    // 'A', 'B', 'C', 'D' seçeneklerinde tablo göster
    setShowTable(["A", "B", "C", "D"].includes(option)); // Bu satırı değiştirdim
    fetchClientData(selectedClient || searchId, option);
  };

  const fetchClientData = (clientId, option) => {
    fetch(`/api/client/${clientId}/data?option=${option}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <Navbar />
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <div className="admin-page">
          <h1>Admin İşlemleri</h1>
          <div className="controls">
            <div className="combo-box">
              <label htmlFor="clients">Danışan Seçiniz: </label>
              <select
                id="clients"
                value={selectedClient}
                onChange={handleClientChange}
              >
                <option value="">-- Danışan Seçiniz --</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="search-box">
              <input
                type="text"
                value={searchId}
                onChange={handleSearchChange}
                placeholder="ID ile Danışan Sorgula "
              />
              <button onClick={handleSearchSubmit}>Sorgula</button>
            </div>
          </div>
          <div className="options">
            <button onClick={() => handleOptionChange("A")}>Kpso Ölçeği</button>
            <button onClick={() => handleOptionChange("B")}>Pndo Ölçeği</button>
            <button onClick={() => handleOptionChange("C")}>Daso Ölçeği</button>
            <button onClick={() => handleOptionChange("D")}>Tsgo Ölçeği</button>
            <button onClick={() => handleOptionChange("E")}>DDVP Sonuç</button>
            <button onClick={() => handleOptionChange("F")}> Hasta Profili</button>
          </div>
          {showTable && option == "A" && (
            
         
            <AdminTable
              headers = {["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"]}
              questions = {[
                "Sıkıntılı Zamanlardan sonra kendimi çabucak toparlayabilirim.",
                "Stresli olayların üstesinden gelmekte güçlük çekerim.",
                "Stresli durumlardan sonra kendime gelmem uzun zaman almaz.",
                "Kötü bir şeyler olduğunda bunu atlatmak benim için zordur.",
                "Zor zamanları çok az sıkıntıyla atlatırım.",
                "Hayatımdaki olumsuzlukların etkisinden kurtulmam uzun zaman alır.",
              ]}
              answers={data.map(row => row.answer)}
              itemPerPage={10}
              testName={"Kpso Ölçeği"}
            />
            
          )}
          {/* {isButtonPressed && (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.column1}</td>
                      <td>{row.column2}</td>
                      <td>{row.column3}</td>
                      <td>{row.column4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}

        </div>
      </div>
    </div>
  );
};

export default AdminPage;
