using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class EmailActivitiesMessage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userIdId",
                table: "EmailActivities",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmailActivities_userIdId",
                table: "EmailActivities",
                column: "userIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_EmailActivities_AspNetUsers_userIdId",
                table: "EmailActivities",
                column: "userIdId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmailActivities_AspNetUsers_userIdId",
                table: "EmailActivities");

            migrationBuilder.DropIndex(
                name: "IX_EmailActivities_userIdId",
                table: "EmailActivities");

            migrationBuilder.DropColumn(
                name: "userIdId",
                table: "EmailActivities");
        }
    }
}
