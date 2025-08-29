from django.db import models

class Job(models.Model):
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    status = models.CharField(
        max_length=50,
        choices=[
            ('applied', 'Applied'),
            ('interview', 'Interview'),
            ('offer', 'Offer'),
            ('rejected', 'Rejected'),
        ],
        default='applied'
    )
    date_applied = models.DateField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.position} at {self.company}"
