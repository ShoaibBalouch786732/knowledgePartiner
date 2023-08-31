import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Import Link if you're using React Router for navigation

function Login() {
  const [showModal, setShowModal] = useState(true); // State to control the visibility of the modal

  // Function to handle closing the modal
  const handleClose = () => {
    setShowModal(false);
  };
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  // Function to handle the click event for "Create an account" link
 
  const [redirectToCreateAccount, setRedirectToCreateAccount] = useState(false);

  const handleCreateAccountClick = () => {
    // Set redirectToCreateAccount to true to trigger the redirection
    setRedirectToCreateAccount(true);
  };

  // Redirect to the CreateAccount page when redirectToCreateAccount is true
  if (redirectToCreateAccount) {
    navigate('/create-account');
    return null; // Return null to prevent rendering Login
  }
  return (
    <>
      {showModal && ( // Render the modal if showModal is true
        <div
          role="dialog"
          aria-modal="true"
          className="fade favouriteModal loginModal modal show"
          tabIndex="-1"
          style={{
            display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="p-0 border-0 modal-header">
                <div
                  className="font-18 font-weight-bold modal-title h4"
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  Sign In
                </div>
                <button
                  type="button"
                  className="close"
                  onClick={handleClose}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <span aria-hidden="true" style={{ cursor: 'pointer' }}>
                    &times;
                  </span>
                </button>
              </div>
              <div className="p-0 modal-body">
                <div className="checkout-form p-0">
                  <form className="modal-form">
                    <div className="hidespace row">
                      <div className="col-md-12">
                        <div id="checkoutlogin" className="form-group">
                          <label
                            className="font-14 form-label"
                            style={{
                              fontSize: '14px',
                            }}
                          >
                            Mobile Number
                          </label>
                          <input
                            className="font-14 form-control"
                            type="tel"
                            required=""
                            maxLength="11"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="login-form mx-auto w-100"></div>
                </div>
                <div
                  className="member-box mb-0 mt-3 text-center font-weight-normal"
                  style={{
                    marginBottom: '0',
                    marginTop: '3px',
                  }}
                >
                  Don't have an account?{' '}
                  <Link
                    to="/create-account"
                    onClick={handleCreateAccountClick}
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
