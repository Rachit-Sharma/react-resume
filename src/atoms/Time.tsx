interface TimeProps {
  date?: Date;
}

const Time = (props: TimeProps) => {
  let confirmedDate = props.date ?? new Date();

  let children = "Now";
  if (!!props.date) {
    children = new Intl.DateTimeFormat(undefined, {
      month: "long",
      year: "numeric",
    }).format(confirmedDate);
  }

  return (
    <time
      dateTime={`${confirmedDate.getFullYear()}-${
        confirmedDate.getMonth() + 1
      }`}
    >
      {children}
    </time>
  );
};

export default Time;
