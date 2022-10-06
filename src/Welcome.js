export default function Welcome(props) {
  console.log(props);
  return (
    <div>
      <h3>Hi, I am {props.name}</h3>
      <h4>I am very {props.feelings} to be here.</h4>
    </div>
  );
}
