package com.weike.rvo;

public class StudentRVO {
	private String student_id;
	private String student_name;
	private String student_pass;
	private String student_sex;
	private String classroom;
	private String academy;
	private String updatetime;
	private String delflag;
	private String student_no;
	private String major;
	private String email;
	private String phone;
	
	@Override
	public String toString() {
		return "StudentRVO [student_id=" + student_id + ", student_name=" + student_name + ", student_pass="
				+ student_pass + ", student_sex=" + student_sex + ", classroom=" + classroom + ", academy=" + academy
				+ ", updatetime=" + updatetime + ", delflag=" + delflag + ", student_no=" + student_no + ", major="
				+ major + ", email=" + email + ", phone=" + phone + "]";
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getStudent_id() {
		return student_id;
	}
	public void setStudent_id(String student_id) {
		this.student_id = student_id;
	}
	public String getStudent_name() {
		return student_name;
	}
	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}
	public String getStudent_pass() {
		return student_pass;
	}
	public void setStudent_pass(String student_pass) {
		this.student_pass = student_pass;
	}
	public String getStudent_sex() {
		return student_sex;
	}
	public void setStudent_sex(String student_sex) {
		this.student_sex = student_sex;
	}
	public String getAcademy() {
		return academy;
	}
	public void setAcademy(String academy) {
		this.academy = academy;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public String getDelflag() {
		return delflag;
	}
	public void setDelflag(String delflag) {
		this.delflag = delflag;
	}
	public String getStudent_no() {
		return student_no;
	}
	public void setStudent_no(String student_no) {
		this.student_no = student_no;
	}
	public String getClassroom() {
		return classroom;
	}
	public void setClassroom(String classroom) {
		this.classroom = classroom;
	}
	
}
