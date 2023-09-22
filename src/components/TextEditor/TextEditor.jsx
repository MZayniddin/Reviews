import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({ reviewData, setReviewData }) => {
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    setReviewData({ ...reviewData, description: content });
  };

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
        init={{
          height: 500,
          menubar: true,
          plugins:
            "advlist autolink lists link image charmap preview anchor " +
            "searchreplace visualblocks code fullscreen " +
            "insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        value={reviewData.description}
        onEditorChange={handleEditorChange}
      />
    </>
  );
};

export default TextEditor;
