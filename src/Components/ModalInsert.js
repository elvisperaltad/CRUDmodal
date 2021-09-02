import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup
} from "reactstrap";
import { useState } from "react";

const ModalInsert = ({ showModal, setShowModalInsert, data, addCharacter }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    anime: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const hideModal = () => {
    setShowModalInsert((prev) => !prev);
  };

  const insert = () => {
    var newCharacter = { form };
    addCharacter(newCharacter);
    hideModal();
  };

  return (
    <Modal isOpen={showModal}>
      <ModalHeader>
        <div>
          <h3>Insertar Personaje</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>Id:</label>

          <input
            className="form-control"
            readOnly
            type="text"
            value={data.length + 1}
          />
        </FormGroup>

        <FormGroup>
          <label>Personaje:</label>
          <input
            className="form-control"
            name="name"
            type="text"
            onChange={handleChange}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <label>Anime:</label>
          <input
            className="form-control"
            name="anime"
            type="text"
            onChange={handleChange}
            value={form.anime}
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={insert}>
          Insertar
        </Button>
        <Button className="btn btn-danger" onClick={hideModal}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalInsert;
