import * as React from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material"
import Modal from "@mui/material/Modal"
import Search from "../components/search"
import SearchIco from "./searchIcon"
import SearchIcon from '@mui/icons-material/Search';
import { PoweredBy } from "react-instantsearch";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: "64%",
  width: "60%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <button
          onClick={handleOpen}
          className="flex items-center px-4 py-3 text-sm text-white rounded-full shadow focus:outline-none w-72 hover:bg-[#f1f7f8] hover:text-primary-dark hover:shadow-lg hover:duration-500"
        >
          <SearchIcon />          
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box
            sx={style}>
            <Box
              justifyContent="space-between">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2">
                記事を検索
              </Typography>
              <Box sx={{
                pt: 1, width: "42px",
                marginright: 0,
                marginleft: "auto",
              }}>
                <PoweredBy />
              </Box>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}></Typography>

            <Typography sx={{
              pt: "5",
            }}>
              <Search />
            </Typography>
          </Box>

        </Modal>
      </div>
    </>
  )
}
