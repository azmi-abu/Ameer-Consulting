import { sendLeadEmail } from "../utils/mailer.js";

const validateEmail = (email) => {
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateName = (name) => {
  return !!name && !/\d/.test(name.trim());
};

const validatePhone = (phone) => {
  return /^05\d{8}$/.test(phone);
};

export const submitContactForm = async (req, res) => {
  try {
    const { name, phone, email, subject } = req.body;

    if (!validateName(name)) {
      return res.status(400).json({
        success: false,
        message: "Invalid name",
      });
    }

    if (!validatePhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone must start with 05 and be 10 digits",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    await sendLeadEmail({ name, phone, email, subject });

    return res.status(200).json({
      success: true,
      message: "Lead sent successfully",
    });
  } catch (error) {
    console.error("submitContactForm error:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to send lead",
    });
  }
};