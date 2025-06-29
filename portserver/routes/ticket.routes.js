import express from 'express';
import { submitTicket } from '../controllers/ticket.controller.js';
import { getAllTickets, updateTicketStatus, getTicketStats } from '../controllers/ticket.admin.controller.js';
import authMiddleware from '../middlewares/auth.js';
import adminMiddleware from '../middlewares/admin.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const tickets = await Ticket.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(tickets);
});

// Create Ticket (Protected)
router.post('/', authMiddleware, submitTicket);

// Admin-only routes
router.get('/admin', authMiddleware, adminMiddleware, getAllTickets);
router.put('/admin/:ticketId', authMiddleware, adminMiddleware, updateTicketStatus);
router.get('/admin/stats', authMiddleware, adminMiddleware, getTicketStats);

export default router;
