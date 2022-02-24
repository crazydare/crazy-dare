import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="App">
      <form>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdQBisB8n-0gQVZgguDOuKnmYIk8uR6x3Fw9mVVhTfhOCI-9Q/viewform?embedded=true"
          width="640"
          height="529"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </form>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Form;
