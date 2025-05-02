import React, { useState } from "react";
import "../styles/ProfilePage.css";


const defaultAvatar =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // fallback avatar

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfile((prev) => ({
        ...prev,
        profilePicture: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile logic here (e.g. localStorage, API)
    alert("Profile saved!");
  };

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <div className="profile-avatar-section">
          <img
            src={profile.profilePicture || defaultAvatar}
            alt="Profile"
            className="profile-avatar"
          />
          <label className="upload-label">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <span className="upload-btn">Upload Photo</span>
          </label>
        </div>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="profile-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="profile-field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              required
              placeholder="Enter your age"
              min="0"
            />
          </div>
          <div className="profile-field">
            <label>Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="profile-field">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
            />
          </div>
          <div className="profile-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <button className="profile-save-btn" type="submit">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
