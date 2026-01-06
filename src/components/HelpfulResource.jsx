import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      {label}
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

export default HelpfulResource;
