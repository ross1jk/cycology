import React from "react";
import Form from "../components/Form";

function Home() {

    const loginInputs = [
        {
            type: "email",
            class: "form-control",
            id: "userEmail",
            label: "Email",
        },
        {
            type: "password",
            class: "form-control",
            id: "userPassword",
            label: "Password",

        }
    ]

    const newUserInputs = [
        {
            type: "text",
            class: "form-control",
            id: "userFirstName",
            label: "First Name",
        },
        {
            type: "text",
            class: "form-control",
            id: "userLastName",
            label: "Last Name",
        },
        {
            type: "email",
            class: "form-control",
            id: "userEmail",
            label: "Email",
        },
        {
            type: "password",
            class: "form-control",
            id: "userPassword",
            label: "Password",

        }
    ]
    return (
        <div>
            <p>Login/ Home</p>

            {/* Find way to switch case this */}
            {loginInputs.map((loginInputs) => (
                <Form
                    type={loginInputs.type}
                    class={loginInputs.class}
                    id={loginInputs.id}
                    label={loginInputs.label}
                />
            ))}
            <button>Login</button>

            {newUserInputs.map((loginInputs) => (
                <Form
                    type={loginInputs.type}
                    class={loginInputs.class}
                    id={loginInputs.id}
                    label={loginInputs.label}
                />
            ))}
            <button>Sign Up</button>

        </div>
    )
}
export default Home