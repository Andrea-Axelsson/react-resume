import React, { useState } from 'react';
import '../styles/Form.css'
import ConfirmModal from './ConfirmModal';

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [modalVisible, setModalVisible] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {

            alert('Please fill in all fields before submitting.');
            return;
        }else{
            setModalVisible(true)
            setTimeout(() => {
                setModalVisible(false)
            }, 3000)
        }
    };

    return (
        <>
        <form  className="form-container" onSubmit={handleSubmit}>
            <div className='input'>
                <label htmlFor="name">Namn:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className='input'>
                <label htmlFor="email">E-post:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className='input'>
                <label htmlFor="subject">Ämne:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>
            <div className='input'>
                <label htmlFor="message">Meddelande:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Skicka</button>
        </form>
{modalVisible && 
<ConfirmModal
name={formData.name}
/>}
        
        </>
    );
}

export default Form