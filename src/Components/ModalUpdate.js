import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup
} from "reactstrap";
import { useState } from "react";
import ModalInsert from "./ModalInsert";

const ModalUpdate = ({
  data,
  showModal,
  setShowModal,
  updateData,
  element
}) => {
  const [form, setForm] = useState({
    id: element.id,
    name: element.name,
    anime: element.anime
  });

  const hideModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const update = (info) => {
    let position = 0;
    let list = data;
    list.map((element) => {
      if (info.id === element.id) {
        list[position].name = info.name;
        list[position].anime = info.anime;
      }
      position++;
    });

    updateData(list);
  };

  return (
    <Modal isOpen={showModal}>
      <ModalHeader>
        <div>
          <h3>Editar Registro</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>Id:</label>

          <input
            className="form-control"
            readOnly
            type="text"
            value={element.id}
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
            value={element.anime}
          />
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <Button color="primary" onClick={update(form)}>
          Editar
        </Button>
        <Button color="danger" onClick={hideModal}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalUpdate;
