import * as React from 'react';
import { useGlobal } from '../../../core/contexts/Global'
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  tableCellClasses,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

dayjs.extend(RelativeTime)

function createData(id, start, end, tasks, remote) {
  return {
    id,
    start,
    end,
    tasks,
    remote
  };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.id}
        </StyledTableCell>
        <StyledTableCell align="center">{dayjs(row.start).fromNow(true)} ago</StyledTableCell>
        <StyledTableCell align="center">{dayjs(row.end).fromNow(true)} ago</StyledTableCell>
        <StyledTableCell align="center">{row.remote ? 'Remote' : 'In-Person'}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Tasks
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      <Typography>#</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">Title</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.tasks.map((task) => (
                    <StyledTableRow key={task.id}>
                      <StyledTableCell align="center" component="th" scope="row">
                        {task.id}
                      </StyledTableCell>
                      <StyledTableCell align="center" component="th" scope="row">
                        {task.title}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ search, shouldSearch, setShouldSearch }) {
  const { user } = useGlobal()
  const [rows, setRows] = React.useState([]);


  React.useEffect(() => {
    if (search.text === '') {
      setRows(
        user.enterExits
          .filter(({ remote }) => search.remote ? remote === search.remote : true)
          .map(item => createData(item.id, item.start, item.end, item.tasks, item.remote))
      )
    } else {
      if (shouldSearch) {
        setRows(
          user.enterExits
            .filter(({ remote }) => search.remote ? remote === search.remote : true)
            .filter(({ tasks }) => tasks.filter(({ title }) => title.search(search.text.toLowerCase()) !== -1).length > 0)
            .map(item => createData(item.id, item.start, item.end, item.tasks, item.remote))
        )
      }
      setShouldSearch(false)
    }
  }, [user, search, shouldSearch])



  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="center">Start</StyledTableCell>
            <StyledTableCell align="center">End</StyledTableCell>
            <StyledTableCell align="center">Approach</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
