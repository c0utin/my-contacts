import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function CreateContact() {
  return (
    <>
      <PageHeader title="New contact" />
      <Input type="text" placeholder="Name" />
      <Select>
        <option value="123">Discord</option>
      </Select>
    </>
  );
}
