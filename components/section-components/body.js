export default function Body({ fields, bodyStyle, extraBodyStyle }) {
  return (
    <>
      {
        fields.body && (
          <div className={bodyStyle} dangerouslySetInnerHTML={{__html: fields.body}}/>
        )
      }

      {
        fields.extraBody && (
          <div className={extraBodyStyle} dangerouslySetInnerHTML={{__html: fields.extraBody}}/>
        )
      }
    </>
  );
}