import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Table,
  Button,
  Container,
  FormGroup
} from "reactstrap";

import Data from "../Data";
import ModalInsert from "./ModalInsert";
import ModalUpdate from "./ModalUpdate";

const ShowTable = () => {
  const [data, setData] = useState(Data);
  const [showModalInsert, setShowModalInsert] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const openModalInsert = () => {
    setShowModalInsert((prev) => !prev);
  };

  const openModalEdit = () => {
    setShowModalEdit((prev) => !prev);
  };

  const addCharacter = (character) => {
    console.log(character.form);
    character.form.id = data.length + 1;
    setData([...data, character.form]);
    console.log(data);
  };

  const deleteCharacter = (id) => {
    const dataFilter = data.filter((data) => data.id !== id);
    setData(dataFilter);
  };
  const updateData = (info) => {
    setData(info);
  };

  return (
    <Container>
      <Button color="success" onClick={openModalInsert}>
        {" "}
        Add
      </Button>

      <ModalInsert
        showModal={showModalInsert}
        setShowModalInsert={setShowModalInsert}
        data={data}
        addCharacter={addCharacter}
      />

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Anime</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.anime}</td>
              <td>
                <Button color="primary" onClick={openModalEdit}>
                  Edit
                </Button>
                {"  "}

                <ModalUpdate
                  showModal={showModalEdit}
                  setShowModal={setShowModalEdit}
                  data={data}
                  updateData={updateData}
                  element={element}
                />
                <Button
                  color="danger"
                  onClick={() => deleteCharacter(element.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default ShowTable;
