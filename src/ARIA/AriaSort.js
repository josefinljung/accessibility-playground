import { useState } from "react";

export default function AriaSort() {
  const initialData = [
    {
      firstName: "Alice",
      lastName: "Zephyr",
      company: "Acme Corp",
      email: "alice@acme.com",
    },
    {
      firstName: "Bob",
      lastName: "Yellow",
      company: "Beta LLC",
      email: "bob@beta.com",
    },
    {
      firstName: "Charlie",
      lastName: "Xavier",
      company: "Gamma Inc",
      email: "charlie@gamma.com",
    },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({
    key: "lastName",
    direction: "ascending",
  });

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortConfig.key].toLowerCase();
    const bVal = b[sortConfig.key].toLowerCase();
    if (aVal < bVal) return sortConfig.direction === "ascending" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction:
            prev.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return { key, direction: "ascending" };
    });
  };

  const getAriaSort = (key) => {
    if (sortConfig.key !== key) return "none";
    return sortConfig.direction;
  };

  return (
    <div className="bg-white border-black border-2 p-2 rounded-md max-w-[500px]">
      <h2 className="text-xl font-medium">
        Table with aria-sort on column headers
      </h2>

      <table className="w-full border-collapse">
        <caption className="sr-only">Steering Committee Members</caption>
        <thead>
          <tr>
            <th aria-sort={getAriaSort("firstName")} className="text-left">
              <button onClick={() => handleSort("firstName")}>
                First Name
              </button>
            </th>
            <th aria-sort={getAriaSort("lastName")} className="text-left">
              <button onClick={() => handleSort("lastName")}>Last Name</button>
            </th>
            <th aria-sort={getAriaSort("company")} className="text-left">
              <button onClick={() => handleSort("company")}>Company</button>
            </th>
            <th className="text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((member, index) => (
            <tr key={index}>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.company}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
