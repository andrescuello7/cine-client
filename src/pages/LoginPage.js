import Login from "../components/login/Login";

export default function LoginPage({ loginAsAdmin }) {
  return (
    <div>
      <Login loginAsAdmin={loginAsAdmin} />
    </div>
  );
}
