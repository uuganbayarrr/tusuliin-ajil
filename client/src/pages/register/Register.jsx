import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Шинээр бүртгэл үүсгэх</h1>
          <label htmlFor="">Хэрэглэгчийн нэр</label>
          <input
            name="username"
            type="text"
            placeholder="Ууганбаяр"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Нууц үг</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Зураг</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Улс</label>
          <input
            name="country"
            type="text"
            placeholder="Монгол"
            onChange={handleChange}
          />
          <button type="submit">Бүртгэл үүсгэх</button>
        </div>
        <div className="right">
          <h1>Би худалдагч болохыг хүсч байна</h1>
          <div className="toggle">
            <label htmlFor="">Худалдагчийн дансыг идэвхжүүлнэ үү</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Гар утас</label>
          <input
            name="phone"
            type="text"
            placeholder="+976 86 88 00 85"
            onChange={handleChange}
          />
          <label htmlFor="">Тайлбар</label>
          <textarea
            placeholder="Өөрийнхөө тухай товч тайлбар"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
