import "./index.css";

const PageTitle = ({
  title,
  description,
  welcome,
}: {
  title: string;
  description: string;
  welcome?: boolean;
}) => {
  return (
    <div className={`header  ${welcome ? "header_welcome" : ""}`}>
      <h1 className={`${welcome ? "welcome_title" : "title"}`}>{title}</h1>
      <h5 className={`${welcome ? "welcome_description" : "description"}`}>
        {description}
      </h5>
    </div>
  );
};

export default PageTitle;
