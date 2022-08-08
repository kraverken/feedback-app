import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a product or a service</p>
        <p>VErsion 1.0.0</p>

        <p>
          <a href="/">Back to Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
