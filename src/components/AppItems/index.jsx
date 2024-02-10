import "./index.css";

const AppItems = (props) => {
  let { appDetails } = props;
  let { appName, imageUrl } = appDetails;

  return (
    <li className="app-item">
      <img src={imageUrl} alt="social-icon" className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  );
};

export default AppItems;
