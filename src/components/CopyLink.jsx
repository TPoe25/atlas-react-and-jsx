import copyIcon from "../assets/copy.svg";

function CopyLink({ link }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  return (
    <img className="copy" src={copyIcon} alt="Copy link" onClick={handleCopy} />
  );
}

export default CopyLink;
