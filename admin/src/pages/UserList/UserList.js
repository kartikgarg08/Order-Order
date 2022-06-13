import './userList.css';
import { DataGrid } from '@mui/x-data-grid';

const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
      ];
      
      const rows = [
        { 
            id: 1, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 2, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 3, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 4, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 5, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 6, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 7, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 8, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 9, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
        { 
            id: 10, 
            username: 'John Doe',
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            email: "johndoe@gmail.com",
            status: "active",
            transaction: "$120.00"
        },
      ];

    return (
        <div className="userList">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList