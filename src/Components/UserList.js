import React from 'react';
const UserList = () => {
  const tableItems = [
    {
      avatar:
        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Liam James',
      email: 'liamjames@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Software engineer',
      salary: '$100K',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Olivia Emma',
      email: 'oliviaemma@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Product designer',
      salary: '$90K',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'William Benjamin',
      email: 'william.benjamin@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Front-end developer',
      salary: '$80K',
    },
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Henry Theodore',
      email: 'henrytheodore@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Laravel engineer',
      salary: '$120K',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Amelia Elijah',
      email: 'amelia.elijah@example.com',
      phone_nimber: '+1 (555) 000-000',
      position: 'Open source manager',
      salary: '$75K',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Date
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Role
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Manage
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tableItems.map((item, indx) => (
            <tr key={indx}>
              <td className="flex truncate line-clamp items-center gap-x-3 my-2">
                <img src={item.avatar} className="w-10 h-10 rounded-full" />
                <div>
                  <span className="block text-gray-400 text-sm font-medium">
                    {item.name}
                  </span>
                  <span className="block  text-gray-400 text-xs">
                    {item.email}
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                24/05/1995
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-400">
                {item.position}
              </td>

              <td className="whitespace-nowrap  px-6 py-2">
                <button
                  href="#"
                  className="inline-block bg-gray-50 rounded-full px-2 text-xs font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
