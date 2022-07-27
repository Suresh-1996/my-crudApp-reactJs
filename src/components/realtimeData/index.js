import StartFirebase from "../firebaseConfig/index";
import React from "react";
import { ref, onValue } from "firebase/database";

const db = StartFirebase();

export class RealtimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "Customer");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <div style={{ marginLeft: "35.5%", width: "1500px" }}>
        <div>
          <h2
            style={{
              backgroundColor: "black",
              color: "white",
              marginRight: "70%",
            }}
          >
            Customers Complete Information
          </h2>
        </div>
        <table>
          <thead>
            <tr style={{ border: "1px black solid" }}>
              <th style={{ border: "1px black solid" }}>Id</th>
              <th style={{ border: "1px black solid" }}>Username</th>
              <th style={{ border: "1px black solid" }}>Fullname</th>
              <th style={{ border: "1px black solid" }}>phone Number</th>
              <th style={{ border: "1px black solid" }}>Date of Birth</th>
            </tr>
          </thead>

          <tbody>
            {this.state.tableData.map((row, index) => {
              return (
                <tr style={{ border: "1px black solid" }}>
                  <td style={{ border: "1px black solid" }}>{index}</td>
                  <td style={{ border: "1px black solid" }}>{row.key}</td>
                  <td style={{ border: "1px black solid" }}>
                    {row.data.Fullname}
                  </td>
                  <td style={{ border: "1px black solid" }}>
                    {row.data.Phonenumber}
                  </td>
                  <td style={{ border: "1px black solid" }}>
                    {row.data.dateofbirth}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
