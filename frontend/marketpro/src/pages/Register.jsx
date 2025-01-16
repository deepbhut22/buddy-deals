import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.scss';

function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    countryCode: '',
    documents: {
      doc1: null,
      doc2: null,
      doc3: null,
      doc4: null
    }
  });

  const totalSteps = 4;
  const documentTypes = ['Identity Proof', 'Address Proof', 'Education Certificate', 'Professional Certificate'];

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileChange = (docKey, file) => {
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docKey]: file
        }
      }));
    } else {
      alert('Please upload PDF files only');
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName;
      case 2:
        return formData.email && formData.password;
      case 3:
        return formData.phone && formData.countryCode;
      case 4:
        return Object.values(formData.documents).every(doc => doc !== null);
      default:
        return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep === totalSteps && isStepComplete()) {
      try {
        const response = await fetch('YOUR_API_ENDPOINT/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Registration error:', error);
      }
    } else {
      handleNext();
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Let's get started";
      case 2:
        return "Create your account";
      case 3:
        return "Contact information";
      case 4:
        return "Document verification";
      default:
        return "";
    }
  };

  const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{getStepTitle()}</h2>
          <p>Step {currentStep} of {totalSteps}</p>
        </div>

        <div className="steps-progress">
          <div className="progress-line" style={{ width: `${progressWidth}%` }} />
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="step-item">
              <div className={`step-circle ${
                step === currentStep ? 'active' :
                step < currentStep ? 'completed' :
                ''
              }`}>
                <span className="step-number">{step}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <div className="mb-3">
                <label htmlFor="countryCode" className="form-label">Country Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="countryCode"
                  placeholder="+1"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              {documentTypes.map((docType, index) => (
                <div key={index} className={`file-upload mb-3 ${formData.documents[`doc${index + 1}`] ? 'has-file' : ''}`}>
                  <input
                    type="file"
                    id={`doc${index + 1}`}
                    accept=".pdf"
                    onChange={(e) => handleFileChange(`doc${index + 1}`, e.target.files[0])}
                    className="d-none"
                  />
                  <label htmlFor={`doc${index + 1}`}>
                    <div className="upload-icon">📄</div>
                    {formData.documents[`doc${index + 1}`] ? (
                      <div>
                        {docType} uploaded successfully
                        <span className="success-check">✓</span>
                      </div>
                    ) : (
                      <div>
                        Upload {docType} <span>(PDF only)</span>
                      </div>
                    )}
                  </label>
                </div>
              ))}
            </div>
          )}

          <div className="d-flex gap-3 mt-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="btn flex-grow-1"
                style={{ backgroundColor: 'lightgreen', color: 'black' }}
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              disabled={!isStepComplete()}
              className="btn btn-primary flex-grow-1"
            >
              {currentStep === totalSteps ? 'Complete Registration' : 'Continue'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-decoration-none text-muted">
            Already have an account? <span style={{ color: '#22c55e' }}>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;