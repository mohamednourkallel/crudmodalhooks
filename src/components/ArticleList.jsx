import React,{useMemo} from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import { Button } from 'react-bootstrap';
const ArticleList = ({articles,deleteProduct}) => {
const confirmMessage=(id,ref)=>{
    deleteProduct(id,ref)
        }
const columns = useMemo(
() => [
{
accessorKey: 'imageart', //access nested data with dot notation
header: 'Image',
Cell: ({ cell}) => (
<Box
sx={{
display: 'flex',
alignItems: 'center',
gap: '1rem',
}}
>
<img
alt=""
height={100}
src={cell.getValue()}
loading="lazy"
style={{ borderRadius: '20%' }}
/>

</Box>),
},
{
accessorKey: 'reference', //access nested data with dot notation
header: 'Référence',
size: 100,
},
{
accessorKey: 'designation',
header: 'Désignation',
size: 100,
},
{
accessorKey: 'marque', //normal accessorKey
header: 'Marque',
size: 100,
},
{
accessorKey: 'prix',
header: 'Prix',
size: 100,
},
{

accessorKey: 'qtestock',
header: 'Stock',
size: 100,
},
{
    accessorKey: '_id',
    header: 'actions',
    size: 100,
    Cell: ({ cell, row }) => (
    <div >
    <Button
    onClick={() => {
    console.log("modification ...")
    }}
    variant="warning"
    size="md"
    className="text-warning btn-link edit"
    >
    <i class="fa-solid fa-pen-to-square"></i>
    </Button>
    <Button
    onClick={(e) => {
    confirmMessage(cell.row.original._id,cell.row.original.reference, e);
    
    }}
    variant="danger"
    size="md"
    className="text-danger btn-link delete"
    >
    <i className="fa fa-trash" />
    </Button>
    </div>
    ),
    },
],
[],
);
return (
<div>
<MaterialReactTable columns={columns} data={articles} />;
</div>
)
}
export default ArticleList