import { generateResearchService } from "../../services/research/research_service.js";
import registerUser from "../../services/auth/register_service.js";

export const generateResearch = async (req, res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                success: false,
                message: "Company name is required"
            });
        }

        const report = await generateResearchService(companyName);

        return res.status(200).json({
            success: true,
            data: report
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};