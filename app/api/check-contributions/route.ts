import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { fetchContributions } from "@jonasdoesthings/github-contributions";

export const dynamic = "force-dynamic";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME as string;

async function sendEmailAlert(hasCommit: boolean) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const subject = hasCommit
    ? "오늘도 커밋 완료! 💪"
    : "오늘 커밋 안 하셨나요? 🚀";

  const message = hasCommit
    ? `
        <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
            오늘도 GitHub Contributions에 커밋을 남기셨네요!<br/>
            잔디가 자라고 있습니다. 🌱
        </p>
      `
    : `
        <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
            GitHub Contributions에 오늘 커밋 기록이 없습니다!<br/>
            잔디를 심어주세요. 🌱
        </p>
      `;
  const imageURL = hasCommit
    ? process.env.SUCCESS_IMG_URL
    : process.env.FAIL_IMG_URL;

  const mailOptions = {
    from: "Commit Reminder <no-reply@ecodev-blog.vercel.app>",
    to: "tnqkr3494@naver.com",
    subject,
    html: `
      <div style="
          font-family: Arial, sans-serif; 
          padding: 20px; 
          max-width: 600px; 
          margin: auto; 
          border: 1px solid #ddd; 
          border-radius: 10px; 
          background-color: #f9f9f9;
          text-align: center;
          ">
          <h2 style="color: #333;">🚀 Commit Status 🚀</h2>
  
          <!-- 프로필 이미지 -->
          <img 
              src="${imageURL}" 
              alt="Profile Image" 
              style="width: 150px; border-radius: 50%; margin-bottom: 20px;"
          />
  
          <p style="font-size: 16px; color: #555; margin-bottom: 10px;">안녕하세요,</p>
  
          ${message}
  
          <!-- 버튼 -->
          <a href="https://github.com/${process.env.GITHUB_USERNAME}"
              style="
              display: inline-block; 
              padding: 12px 24px; 
              font-size: 16px; 
              color: #fff; 
              background-color: #28a745; 
              text-decoration: none; 
              border-radius: 5px; 
              font-weight: bold;
              transition: background-color 0.3s;
              "
              onmouseover="this.style.backgroundColor='#218838'"
              onmouseout="this.style.backgroundColor='#28a745'"
          >
              GitHub로 이동하기
          </a>
  
          <p style="font-size: 14px; color: #999; margin-top: 20px;">
              이 메일은 자동으로 발송되었습니다.
          </p>
      </div>
        `,
  };

  await transporter.sendMail(mailOptions);
}

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const contributionsYear = await fetchContributions(GITHUB_USERNAME);

  const todayContributions = contributionsYear.contributions.find(
    (day) => day.date === today
  );

  const hasCommit = todayContributions
    ? todayContributions.numberOfContributions > 0
    : false;

  await sendEmailAlert(hasCommit);

  return NextResponse.json({
    today,
    contributions: hasCommit ? todayContributions?.numberOfContributions : 0,
  });
}
