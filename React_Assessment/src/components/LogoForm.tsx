import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
const LogoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    model: '',
    color: '',
    yom: '',
    insurance: '',
    kms: '',
    location: '',
    owners: '',
    transmission: '',
    external: '',
    photo: null,
  });
  const [data, setdata] = useState([])
 const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(formData).every(res => res === "")
    if (checkEmptyInput) {
      const newData = (data) => ([...data, formData])
      setdata(newData);
      const emptyInput = {
        model: '',
        color: '',
        yom: '',
        insurance: '',
        kms: '',
        location: '',
        owners: '',
        transmission: '',
        external: '',
        photo: null,
      }
      setFormData(emptyInput)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Model
          <input type="text" name="model" value={formData.model} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Color
          <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Year of Manfacture
          <input type="text" name="yom" value={formData.yom} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Insurance Valid Upto
          <input type="text" name="insurance" value={formData.insurance} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Kms
          <input type="text" name="kms" value={formData.kms} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Location
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          No of Owners
          <input type="text" name="owners" value={formData.owners} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Transmission
          <input type="text" name="transmission" value={formData.transmission} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          External Fitments
          <input type="text" name="external" value={formData.external} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Photo
          <input type="file" name="photo" onChange={handlePhotoChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
        {data.map((i) => {
          return (
            <ul key={i.model}>
              <li>{i.model}</li>
              <li>{i.color}</li>
              <li>{i.yom}</li>
              <li>{i.insurance}</li>
              <li>{i.kms}</li>
              <li>{i.location}</li>
              <li>{i.owners}</li>
              <li>{i.transmission}</li>
              <li>{i.external}</li>
              <li>{i.photo}</li>
            </ul>
          )
        })}
      </form>
    </div>
  );
};

export default LogoForm;
